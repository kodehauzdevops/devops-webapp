from fastapi import FastAPI
from fastapi.responses import PlainTextResponse
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

@app.get("/metrics", response_class=PlainTextResponse)
async def get_metrics():
    name = 'testing_testing_testing'
    return "{}\n{}\n{} {}".format(
        f"# HELP {name} A dummy parameter for testing",
        f"# TYPE {name} gauge",
        name,
        random.randint(10, 100)
    )

