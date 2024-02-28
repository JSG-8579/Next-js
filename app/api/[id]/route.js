import {test} from '../db';

export async function GET(req, {params}){ 
    //req로 데이터 들어오고, parans로 url 맨뒤 값 가져옴
    // console.log(params.id)
    const data = await test('detail', {id:params.id})

    return Response.json(data);
}

export async function DELETE(req, {params}){
    console.log(params.id)
    const data = await test('delete', {id:Number(params.id)})
    return Response.json(data);
}

export async function PUT(req){
    const data = await test('put', await req.json())
    return Response.json(data);
}




