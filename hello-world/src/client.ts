import { Connection, Client } from '@temporalio/client';
import { nanoid } from 'nanoid';

import { example } from './workflows';

async function run() {
  const connection = await Connection.connect({
    address: 'temporal.railway.internal:7233',
  });

  const client = new Client({
    connection,
  });

  const handle = await client.workflow.start(example, {
    args: ['Temporal'],
    taskQueue: 'hello-world',
    workflowId: 'workflow-' + nanoid(),
  });
  console.log(`Started workflow ${handle.workflowId}`);
  console.log(await handle.result());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
