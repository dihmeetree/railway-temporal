import { NativeConnection, Worker } from '@temporalio/worker'

import * as activities from './activities'

async function run() {
  const connection = await NativeConnection.connect({
    address: 'temporal-frontend-service.railway.internal:7233',
  })
  const worker = await Worker.create({
    activities,
    connection,
    namespace: 'default',
    taskQueue: 'hello-world',
    workflowBundle: {
      codePath: require.resolve('../workflow-bundle.js'),
    },
    identity: process.env.RAILWAY_REPLICA_ID,
  })
  await worker.run()
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
