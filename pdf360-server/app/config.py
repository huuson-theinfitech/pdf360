from pydantic_settings import BaseSettings
from typing import Optional
from sqlalchemy.engine import URL
from pydantic import field_validator
from typing import Dict, Any

class AuthConfig(BaseSettings):
    DB_CONNECTION: str
    SQL_DB_HOST: str
    SQL_DB_PORT: str
    SQL_DB_USER: str
    SQL_DB_PASSWORD: str
    POSTGRES_DB: str
    SQLALCHEMY_DATABASE_URI: str

    @field_validator("SQLALCHEMY_DATABASE_URI", mode="before")
    def assemble_db_connection(cls, v: Optional[str], values: Dict[str, Any]) -> Any:
        if v:
            return v

        connection = values.data.get("DB_CONNECTION")
        if not connection:
            raise ValueError("must specify at least DB_CONNECTION or SQLALCHEMY_DATABASE_URI")

        host = values.data.get("SQL_DB_HOST")
        
        port =values.data.get("SQL_DB_PORT")
        user = values.data.get("SQL_DB_USER")
        password = values.data.get("SQL_DB_PASSWORD")
        db = values.data.get("POSTGRES_DB")
        return URL.create(
            drivername=connection,
            username=user,
            password=password,
            host=host,
            port=port,
            database=db,
        ).render_as_string(hide_password=False)

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

config = AuthConfig()