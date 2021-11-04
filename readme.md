# react-native push notification open to specific screen

# firebase serverkey : AAAAuzFDBPw:APA91bGa3ykilV0M8ZnjIXczVnjxmBzkCHb3YDOmYhJOILOGCYfWADS_pnr83e2OpvSmC8OK56jqtQIOuV1A7MlXUUlfwKmJg_hv7VnENo8NudDUSalxuqtGavAO016ztTdqklv8CYf8

# firebase senderid: 803985360124

# firebase notification restApi

# url https://fcm.googleapis.com/fcm/send

# method Post

# header

{
Authorization:key=AAAAuzFDBPw:APA91bGa3ykilV0M8ZnjIXczVnjxmBzkCHb3YDOmYhJOILOGCYfWADS_pnr83e2OpvSmC8OK56jqtQIOuV1A7MlXUUlfwKmJg_hv7VnENo8NudDUSalxuqtGavAO016ztTdqklv8CYf8,
Content-Type:application/json
}

# body, to(application token)

{
"to":"e-CGmL-mSsuGKc-4E2K5hi:APA91bGn-MmywlGoP7k1usv8HbnFjZPQV6yr5waLPrHZ9uP9JkZg4xZYZY3Kcbe_RQB0d75xe9Gu2rFEEaj9ejuZ_jvj9UICmlDFwamHMJfhyWTjyW2JTNyt1pbqgm7WMmz7N4R-3e8E",
"notification" : {
"body" : "navigaation test",
"OrganizationId":"2",
"content_available" : true,
"priority" : "high",
"subTitle":"",
"title":"Open Profile Screen"
},
"data" : {
"priority" : "high",
"sound":"app_sound.wav",
"content_available" : true,
"bodyText" : "New Announcement assigned",
"organization" :"Elementary school",
"type":"navigate",
"screen":"Home",
"params":{
"id":5,
"name":"xyz",
"age":20
}
}
}
