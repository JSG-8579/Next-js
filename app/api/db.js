//mongo 분리

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://jsg8579:wjdtmd123!@cluster0.opld0gm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export const test = async (type, body)=>{
    await client.connect();
    let db, collection, data
    console.log('성공');
    db = client.db('Nextjs')
    collection = db.collection('test')

    switch(type){
        case 'post':await collection.insertOne(body);
        break;

        case 'detail':
        data = await collection.find(body).toArray();
        break;

        case 'delete':
        data = await collection.deleteOne(body);
        break;

        case 'put': await collection.updateOne({id:body.id}, {$set:{title:body.title}})
        break;
    }

    if(type != 'detail') data = await collection.find({}).toArray(); //데이터 모두 가져오기
    client.close();
    console.log(body)
    console.log(type)
    return data;
}