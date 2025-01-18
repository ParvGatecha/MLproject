from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI()

# Load the trained model
model = joblib.load('model.pkl')

class Features(BaseModel):
    features: list

@app.post("/predict")
async def predict(features: Features):
    input_features = np.array(features.features).reshape(1, -1)
    prediction = model.predict(input_features)
    return {"prediction": int(prediction[0])}

@app.get("/get")
async def root():
   return {"message": "Hello World"}