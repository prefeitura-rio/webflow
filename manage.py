from pathlib import Path

import pandas as pd
import typer
from cookiecutter.main import cookiecutter

CARDS_PATH = Path(__file__).parent / "cards"
COOKIECUTTER_PATH_SHARECARD = Path(__file__).parent / "templates" / "share-card"

app = typer.Typer()


@app.command()
def add_share_cards_from_table(csv_or_sheets_url, webpage_id):

    csv_or_sheets_url = csv_or_sheets_url.replace(
        "/edit#gid=", "/export?format=csv&gid="
    )

    df = pd.read_csv(csv_or_sheets_url)

    for index, row in df.iterrows():
        add_share_card(
            row["card_id"],
            row["title"],
            row["description"],
            row["image_url"],
            webpage_id,
        )


@app.command()
def add_share_card(
    card_id: str = typer.Argument(...),
    title: str = typer.Argument(...),
    description: str = typer.Argument(...),
    image_url: str = typer.Argument(...),
    webpage_id: str = typer.Argument(...),
):
    """
    Add a new share card to the project.
    """
    cookiecutter(
        str(COOKIECUTTER_PATH_SHARECARD),
        no_input=True,
        extra_context={
            "card_id": card_id,
            "title": title,
            "description": description,
            "image_url": image_url,
        },
        output_dir=str(CARDS_PATH / webpage_id),
    )


if __name__ == "__main__":
    app()
