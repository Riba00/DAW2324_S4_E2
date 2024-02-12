from fastapi import FastAPI, Form, HTTPException, status, Depends

### IMPORTS FROM OUR FILES ###
from tokenAuth import create_token, get_current_user, verify_credentials
from picanova import encoded_credentials, fetch_products_from_api, insert_products
from database import get_connection
from order_picanova import encoded_credentials, fetch_orders_from_api, insert_orders
import httpx

app = FastAPI()

PICANOVA_PRODUCTS_URL = "https://api.picanova.com/api/beta/products"

connection = get_connection()

@app.post("/token")
def login(username: str = Form(...), password: str = Form(...)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        if verify_credentials(username, password):
            data = {"sub": username}
            access_token = create_token(data)
            return {"access_token": access_token, "token_type": "bearer"}
        else:
            raise credentials_exception
    except Exception as e:
        return {"message": f"Error : {str(e)}"}


@app.get("/products")
async def get_and_insert_products(current_user: dict = Depends(get_current_user)):
    try:
        products_data = await fetch_products_from_api()
        if products_data:
            await insert_products(products_data)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/orders")
async def get_and_insert_orders(current_user: dict = Depends(get_current_user)):
    try:
        orders_data = await fetch_orders_from_api()
        print(orders_data)
        if orders_data:
            await insert_orders(orders_data)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))