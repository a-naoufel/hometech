# Generated by Django 5.0.2 on 2024-06-04 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_product_discount"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="image",
            field=models.ImageField(
                blank=True, default="/default.jpg", null=True, upload_to=""
            ),
        ),
    ]
