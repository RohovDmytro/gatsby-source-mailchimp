const Mailchimp = require('mailchimp-api-v3')

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const { key, id } = configOptions
  const mailchimp = new Mailchimp(key)

  delete configOptions.plugins

  const getNodeData = response => {
    const nodeId = createNodeId(`mailchimp-list-stats-${response.id}`)
    const nodeContent = JSON.stringify(response)
    const nodeData = Object.assign({}, response, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `MailchimpList`,
        content: nodeContent,
        contentDigest: createContentDigest(response),
      },
    })
    return nodeData
  }

  try {
    const response = await mailchimp.get({
      path: `/lists/${id}`,
    })
    const dataForNode = getNodeData(response)
    console.log('creating node')
    return createNode(dataForNode)
  } catch (e) {
    console.log(e)
    return
  }
}
