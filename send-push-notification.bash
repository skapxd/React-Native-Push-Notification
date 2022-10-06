curl --location --request POST 'https://fcm.googleapis.com/fcm/send' \
--header 'Authorization: key=Firebase-Server-Token' \
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
    "to": "Device-Token"
}'