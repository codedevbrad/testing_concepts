const amqp = require("amqplib");
const { asyncSupport } = require('@codedevbrad/serverutils');

async function subscribe() {

    try {
        const amqpServer = "";
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("jobs");

        let jobs = [ ];
        
        await channel.consume("jobs", message => {
            let job = JSON.parse(message.content.toString());

            var jobDate = new Date( job.date );

            var OneDay = new Date().getTime() + (1 * 24 * 60 * 60 * 1000)

            if ( jobDate > OneDay ) {
                jobs.push( job );
            }
        });
        return jobs;
    }
    catch (ex) {
        console.error(ex)
    }
}

module.exports = asyncSupport( async ( req , res , next ) => {
    let jobs = await subscribe();
    res.status( 200 ).json( jobs );
});
