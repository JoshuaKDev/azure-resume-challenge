import azure.functions as func
import json

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

count = 0

@app.route(route="visits")
def visits(req: func.HttpRequest) -> func.HttpResponse:
    global count
    count += 1

    return func.HttpResponse(
        json.dumps({"count": count}),
        mimetype="application/json",
        status_code=200
    )