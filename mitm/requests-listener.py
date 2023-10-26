from mitmproxy import http
import json

request_headers_list = []

def request(flow: http.HTTPFlow) -> None:
    if "" in flow.request.url:
        request_headers_list.append([flow.request.url,flow.request.json()])
    save_request_headers()

def response(flow: http.HTTPFlow) -> None:
    pass

def save_request_headers():
    with open("requests.json", "w") as file:
        json.dump(request_headers_list, file, indent=2)