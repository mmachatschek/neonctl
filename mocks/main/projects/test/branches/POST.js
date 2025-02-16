export default function (req, res) {
  if (req.body.branch?.name === 'test_branch_with_parent_name') {
    expect(req.body).toMatchObject({
      branch: {
        name: 'test_branch_with_parent_name',
        parent_id: 'br-main-branch-123456',
      },
    });
    res.send({
      branch: {
        id: 'br-new-branch-123456',
        name: 'test_branch_with_parent_name',
        parent_id: 'br-main-branch-123456',
        created_at: '2021-01-01T00:00:00.000Z',
      },
    });
  } else if (req.body.branch?.name === 'test_branch_with_parent_lsn') {
    expect(req.body).toMatchObject({
      branch: {
        name: 'test_branch_with_parent_lsn',
        parent_lsn: expect.any(String),
      },
    });
    res.send({
      branch: {
        id: 'br-new-branch-123456',
        name: 'test_branch_with_parent_lsn',
        parent_id: 'br-main-branch-123456',
        created_at: '2021-01-01T00:00:00.000Z',
      },
    });
  } else if (req.body.branch?.name === 'test_branch_with_parent_timestamp') {
    expect(req.body).toMatchObject({
      branch: {
        name: 'test_branch_with_parent_timestamp',
        parent_timestamp: expect.any(String),
      },
    });
    res.send({
      branch: {
        id: 'br-new-branch-123456',
        name: 'test_branch_with_parent_timestamp',
        parent_id: 'br-main-branch-123456',
        created_at: '2021-01-01T00:00:00.000Z',
      },
    });
  } else {
    expect(req.body).toMatchObject({
      branch: {
        name: 'test_branch',
      },
    });
    const result = {
      branch: {
        id: 'br-new-branch-123456',
        name: 'test_branch',
        created_at: '2021-01-01T00:00:00.000Z',
      },
    };
    if (req.body.endpoints?.length > 0) {
      result.endpoints = req.body.endpoints.map((endpoint) => ({
        id: `ep-${endpoint.name}-123456`,
        type: endpoint.type,
        created_at: '2021-01-01T00:00:00.000Z',
        host: `${endpoint.name}.example.com`,
      }));
    }
    res.send(result);
  }
}
