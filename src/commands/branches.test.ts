import { describe } from '@jest/globals';

import { testCliCommand } from '../test_utils/test_cli_command.js';

describe('branches', () => {
  testCliCommand({
    name: 'list',
    args: ['branches', 'list', '--project-id', 'test'],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'create by default with r/w endpoint',
    args: [
      'branches',
      'create',
      '--project-id',
      'test',
      '--name',
      'test_branch',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'create with readonly endpoint',
    args: [
      'branches',
      'create',
      '--project-id',
      'test',
      '--name',
      'test_branch',
      '--type',
      'read_only',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'create without endpoint',
    args: [
      'branches',
      'create',
      '--project-id',
      'test',
      '--name',
      'test_branch',
      '--no-compute',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'create with parent by name',
    args: [
      'branches',
      'create',
      '--project-id',
      'test',
      '--name',
      'test_branch_with_parent_name',
      '--parent',
      'main',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'create with parent by lsn',
    args: [
      'branches',
      'create',
      '--project-id',
      'test',
      '--name',
      'test_branch_with_parent_lsn',
      '--parent',
      '0/123ABC',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'create with parent by timestamp',
    args: [
      'branches',
      'create',
      '--project-id',
      'test',
      '--name',
      'test_branch_with_parent_timestamp',
      '--parent',
      '2021-01-01T00:00:00.000Z',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'delete by id',
    args: [
      'branches',
      'delete',
      'br-sunny-branch-123456',
      '--project-id',
      'test',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'rename',
    args: [
      'branches',
      'rename',
      'test_branch',
      'new_test_branch',
      '--project-id',
      'test',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'set primary by id',
    args: [
      'branches',
      'set-primary',
      'br-sunny-branch-123456',
      '--project-id',
      'test',
    ],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'get by id',
    args: ['branches', 'get', 'br-sunny-branch-123456', '--project-id', 'test'],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'get by name',
    args: ['branches', 'get', 'test_branch', '--project-id', 'test'],
    expected: {
      snapshot: true,
    },
  });

  testCliCommand({
    name: 'add compute',
    args: ['branches', 'add-compute', 'test_branch', '--project-id', 'test'],
    expected: {
      snapshot: true,
    },
  });
});
