import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import sys
from pathlib import Path

sys.path.append(str(Path(__file__).parent.parent))

from src.router import router as router_crypto

app = FastAPI()

app.include_router(router_crypto)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://81.94.156.151",
    "https://81.94.156.151"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
