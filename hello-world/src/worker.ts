import { NativeConnection, Worker } from '@temporalio/worker'

import * as activities from './activities'

async function run() {
  const connection = await NativeConnection.connect({
    address: 'temporal.railway.internal:7233',
  })
  // Generate a number between 1 and 10000
  const worker = await Worker.create({
    activities,
    connection,
    namespace: 'default',
    taskQueue: 'hello-world',
    workflowBundle: {
      codePath: require.resolve('../workflow-bundle.js'),
    },
    identity: 'worker-' + Math.floor(Math.random() * 100000 + 1),
  })
  await worker.run()
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
