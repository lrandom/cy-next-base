export async function POST(request) {
    const resp = await fetch('http://152.42.240.131/api/v1/login', {},
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: 'luan@gmail.com',
                password: '123456'
            }),
        })
    console.log("DATA",JSON.stringify(resp.json()));
    return Response.json({
        message: "Hello World"
    })
}