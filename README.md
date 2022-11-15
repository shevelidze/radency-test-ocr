#  radency-test-ocr

## Running the project

```
chmod +x ./start.sh
```

```
./start.sh
```

## Usage

Send a `POST` request to `http://localhost:8000` with a JSON like below:

```json
{
  "fileUrl": "https://i.ibb.co/Z1C96Fs/hello-world.png"
}
```

or 

```json
{
  "fileUrl": "https://previews.123rf.com/images/happyroman/happyroman1611/happyroman161100004/67968361-atm-transaction-printed-paper-receipt-bill-vector.jpg"
}
```

You can pass your own url.

In the terminal, in which you started the project, you will get the text from the image, or an appropriate error message.
