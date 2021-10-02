/* RabbitMQ */
const amqp = require("amqplib");

const { asyncSupport } = require('@codedevbrad/serverutils');

async function publish( val ) {

    try {
        const amqpServer = "
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("jobs");
        await channel.sendToQueue("jobs", Buffer.from(JSON.stringify( val )))
        console.log(`Job sent successfully`);
        await channel.close();
        await connection.close();
    }
    catch (ex){
        console.error(ex)
    }
}

module.exports = asyncSupport( async ( req , res , next ) => {
        let { imageUrl } = req.body;

        await publish({ date: Date.now() , job: imageUrl });
        res.status( 200 ).send( 'job quequed' );
});
