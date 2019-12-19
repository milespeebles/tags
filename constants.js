const TAG = {
  title: 'tag schema',
  version: 0,
  description: 'describes a tag object',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    name: 'string',
    description: 'string',
    date_added: 'string',
    date_modified: 'string',
  },
}

export const NAMES = { TAGS: 'tags' }

export const SCHEMAS = { TAG }

