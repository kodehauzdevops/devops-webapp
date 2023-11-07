from fastapi import FastAPI
import random
from datetime import date

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/postform")
async def postform():
    return {"message": "form successfully posted"}


@app.get("/monitoring")
async def get_monitoring():
    return "{}: {}".format(date.today(), random.randint(10, 100))

@app.get("/metrics")
async def get_metrics():
    return "testing_testing_testing, {}".format(random.randint(10, 100))

