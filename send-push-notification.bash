curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
--header 'Authorization: key=AAAAAmXvTco:APA91bGrFnPO91bp3fvHURYRC_jDDeBQBlEDaTbk2xyAm9NXQ3QTWQf6jzpJrCm8nQ6swgbP7e5EyQ8SmU25sVPbL98iM-W6zRI9h7rrrrusdkeD6AsGSV8dkA4RoWLFpEdZwVWcxAjc' \
--header 'Content-Type: application/json' \
--data-raw '{
    "notification": {
        "body": "this is a body",
        "title": "this is a title"
    },
    "priority": "high",
    "data": {
        "click_action": "FLUTTER_NOTIFICATION_CLICK",
        "id": "1",
        "status": "done",
        "uid": "encanta eso"
    },
    "to": "dMW4-f4gQpi-NeDvepCWSN:APA91bGTMjYYz5USMUOeca6kne4H15UQRxyKAxrBGNxfwtuDOU3DyWxw5V-DS5GDi3B2dYJdqS2VXMQrOSzn-xtsJ0bS7nRl7cqhucGP0xra8bXu8XS6JrNDYX1qcGLFkYf8YsisvYF4"
}'