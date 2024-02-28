import {test} from './db';

export async function GET(){
    
    return Response.json(await test());
}

export async function POST(req){
    
    // console.log( await req.json());
    
    return Response.json(await test('post', await req.json()));
}
// 'post', req.json())