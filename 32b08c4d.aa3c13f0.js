(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{193:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return h}));var a=t(0),s=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),p=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},m=function(e){var n=p(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,h=m["".concat(r,".").concat(b)]||m[b]||d[b]||i;return t?s.a.createElement(h,o({ref:n},l,{components:t})):s.a.createElement(h,o({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var l=2;l<i;l++)r[l]=t[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),s=t(6),i=(t(0),t(193)),r={id:"stitch-type-merging",title:"Type merging",sidebar_label:"Type merging"},o={unversionedId:"stitch-type-merging",id:"stitch-type-merging",isDocsHomePage:!1,title:"Type merging",description:"Type merging offers an alternative strategy to schema extensions for including types across subschemas. It allows partial definitions of a type to exist in any subschema, and then merges all partials into one unified type in the gateway schema. When querying for a merged type, the gateway smartly delegates portions of the request to each relevant subschema in dependency order, and then combines all results for the final return.",source:"@site/docs/stitch-type-merging.md",permalink:"/docs/stitch-type-merging",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/stitch-type-merging.md",sidebar_label:"Type merging",sidebar:"someSidebar",previous:{title:"Extending stitched schemas",permalink:"/docs/stitch-schema-extensions"},next:{title:"Stitching API",permalink:"/docs/stitch-api"}},c=[{value:"Basic example",id:"basic-example",children:[{value:"With batching",id:"with-batching",children:[]},{value:"Types without a database",id:"types-without-a-database",children:[]}]},{value:"Merging patterns",id:"merging-patterns",children:[{value:"Stub types",id:"stub-types",children:[]},{value:"Injected keys",id:"injected-keys",children:[]},{value:"Federation services",id:"federation-services",children:[]}]},{value:"Combined interfaces",id:"combined-interfaces",children:[{value:"Interface merging",id:"interface-merging",children:[]},{value:"Interface extensions",id:"interface-extensions",children:[]}]},{value:"Custom merge resolvers",id:"custom-merge-resolvers",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Type merging offers an alternative strategy to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-schema-extensions"}),"schema extensions")," for including types across subschemas. It allows ",Object(i.b)("em",{parentName:"p"},"partial definitions")," of a type to exist in any subschema, and then merges all partials into one unified type in the gateway schema. When querying for a merged type, the gateway smartly delegates portions of the request to each relevant subschema in dependency order, and then combines all results for the final return."),Object(i.b)("p",null,"Using type merging frequently eliminates the need for schema extensions, though does not preclude their use. Merging can often outperform extensions by resolving entire portions of an object tree with a single delegation. More broadly, it offers similar capabilities to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"}),"Apollo Federation")," while using only plain GraphQL and bare-metal configuration."),Object(i.b)("h2",{id:"basic-example"},"Basic example"),Object(i.b)("p",null,"Type merging encourages types to be split naturally across services by concern. For example, let's make a small classifieds app where users may list items for sale that other users can purchase. Separating listings from users might look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from '@graphql-tools/schema';\nimport { addMocksToSchema } from '@graphql-tools/mock';\n\nlet listingsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Listing {\n      id: ID!\n      description: String!\n      price: Float!\n      seller: User!\n      buyer: User\n    }\n\n    type User {\n      id: ID!\n      listings: [Listing]!\n    }\n\n    type Query {\n      listingById(id: ID!): Listing\n      userById(id: ID!): User\n    }\n  `\n});\n\nlet usersSchema = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      email: String!\n    }\n\n    type Query {\n      userById(id: ID!): User\n    }\n  `\n});\n\n// just mock the schemas for now to make them return dummy data\nlistingsSchema = addMocksToSchema({ schema: listingsSchema });\nusersSchema = addMocksToSchema({ schema: usersSchema });\n")),Object(i.b)("p",null,"Note that both services define a ",Object(i.b)("em",{parentName:"p"},"different")," ",Object(i.b)("inlineCode",{parentName:"p"},"User")," type. While the users service manages information about user accounts, the listings service simply provides listings associated with a user ID. Now we just have to configure the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," type to be merged:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { stitchSchemas } from '@graphql-tools/stitch';\n\nconst gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: listingsSchema,\n      merge: {\n        User: {\n          fieldName: 'userById',\n          selectionSet: '{ id }',\n          args: (partialUser) => ({ id: partialUser.id }),\n        }\n      }\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        User: {\n          fieldName: 'userById',\n          selectionSet: '{ id }',\n          args: (partialUser) => ({ id: partialUser.id }),\n        }\n      }\n    },\n  ],\n  mergeTypes: true\n});\n")),Object(i.b)("p",null,"That's it! Under the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-combining-schemas#subschema-configs"}),"subschema config")," ",Object(i.b)("inlineCode",{parentName:"p"},"merge")," option, each subschema simply provides a query for accessing its respective partial type (services without an expression of the type may omit this). The merge config's ",Object(i.b)("inlineCode",{parentName:"p"},"fieldName")," specifies a query, ",Object(i.b)("inlineCode",{parentName:"p"},"selectionSet")," specifies one or more key fields required from other services to perform the query, and ",Object(i.b)("inlineCode",{parentName:"p"},"args")," formats the preceding partial data into query arguments. This configuration allows type merging to smartly resolve a complete ",Object(i.b)("inlineCode",{parentName:"p"},"User"),", regardless of which service provides the initial representation of it."),Object(i.b)("p",null,"We now have a combined ",Object(i.b)("inlineCode",{parentName:"p"},"User")," type in the gateway schema!"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type User {\n  id: ID!\n  email: String!\n  listings: [Listing]!\n}\n")),Object(i.b)("h3",{id:"with-batching"},"With batching"),Object(i.b)("p",null,"An inefficiency in the example above is that subschemas are queried for only one ",Object(i.b)("inlineCode",{parentName:"p"},"User")," partial at a time via ",Object(i.b)("inlineCode",{parentName:"p"},"userById"),". These single queries quickly add up, especially when resolving arrays of objects. We can fix this with batching. The first thing we'll need are array queries that fetch many partials at once from each service:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"usersByIds(ids: [ID!]!): [User]!\n")),Object(i.b)("p",null,"Once each service provides an array query, batching may be enabled by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"key")," method that picks a key from each partial record. The ",Object(i.b)("inlineCode",{parentName:"p"},"argsFromKeys")," method then transforms the list of picked keys into query arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: listingsSchema,\n      merge: {\n        User: {\n          fieldName: 'usersByIds',\n          selectionSet: '{ id }',\n          key: ({ id }) => id,\n          argsFromKeys: (ids) => ({ ids }),\n        }\n      }\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        User: {\n          fieldName: 'usersByIds',\n          selectionSet: '{ id }',\n          key: ({ id }) => id,\n          argsFromKeys: (ids) => ({ ids }),\n        }\n      }\n    },\n  ],\n  mergeTypes: true\n});\n")),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"valuesFromResults")," method may also be provided to map the raw query result into the batched set."),Object(i.b)("h3",{id:"types-without-a-database"},"Types without a database"),Object(i.b)("p",null,"It's logical to assume that each ",Object(i.b)("inlineCode",{parentName:"p"},"usersByIds")," query has a backing database table used to lookup the requested user IDs. However, this is frequently not the case! Here's a simple example that demonstrates how ",Object(i.b)("inlineCode",{parentName:"p"},"User.listings")," can be resolved without the listings service having any formal database concept of a User:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const listingsData = [\n  { id: '1', description: 'Junk for sale', price: 10.99, sellerId: '1', buyerId: '2' },\n  { id: '2', description: 'Spare parts', price: 200.99, sellerId: '1', buyerId: null },\n];\n\nconst listingsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Listing {\n      id: ID!\n      description: String!\n      price: Float!\n      seller: User!\n      buyer: User\n    }\n\n    type User {\n      id: ID!\n      listings: [Listing]!\n    }\n\n    type Query {\n      listingsByIds(ids: [ID!]!): [Listing]!\n      usersByIds(ids: [ID!]!): [User]!\n    }\n  `,\n  resolvers: {\n    Query: {\n      listingsByIds: (root, args) => args.ids.map(id => listingsData.find(listing => listing.id === id)),\n      usersByIds: (root, args) => args.ids.map(id => { id }),\n    },\n    User: {\n      listings(user) {\n        return listingsData.filter(listing => listing.sellerId === user.id);\n      }\n    }\n  }\n});\n")),Object(i.b)("p",null,"In this example, ",Object(i.b)("inlineCode",{parentName:"p"},"usersByIds")," simply converts the submitted IDs into stub records that get resolved as the local ",Object(i.b)("inlineCode",{parentName:"p"},"User")," type. This can be expanded even futher using a formal ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-type-merging#injected-keys"}),"pattern of injected keys"),"."),Object(i.b)("h2",{id:"merging-patterns"},"Merging patterns"),Object(i.b)("p",null,"There are many ways to structure type merging, and none of them are wrong! The best ways depend on what makes sense in your schema. Here are some common merging patterns that can be mixed and matched..."),Object(i.b)("h3",{id:"stub-types"},"Stub types"),Object(i.b)("p",null,"The simplest pattern for providing a type across subschemas is to simply include an ID-only stub representing it where needed, and allow for external data to be merged onto the stub. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let listingsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Listing {\n      id: ID!\n      description: String!\n      price: Float!\n      seller: User!\n      buyer: User\n    }\n\n    # stubbed type...\n    type User {\n      id: ID!\n    }\n\n    type Query {\n      listingById(id: ID!): Listing\n    }\n  `\n});\n\nlet usersSchema = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      email: String!\n    }\n\n    type Query {\n      usersByIds(ids: [ID!]!): [User]!\n    }\n  `\n});\n")),Object(i.b)("p",null,"When a stubbed type includes no other data beyond a shared key, then the type may be considered ",Object(i.b)("em",{parentName:"p"},"unidirectional")," to the service","\u2014","that is, the service holds no unique data that would require an inbound request to fetch it. In these cases, ",Object(i.b)("inlineCode",{parentName:"p"},"merge")," config may be omitted entirely for the stub type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: listingsSchema,\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        User: {\n          selectionSet: '{ id }',\n          fieldName: 'usersByIds',\n          key: ({ id }) => id,\n          argsFromKeys: (ids) => ({ ids }),\n        }\n      }\n    },\n  ],\n  mergeTypes: true\n});\n")),Object(i.b)("p",null,"Stubbed types are easy to setup and effectively work as automatic ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-schema-extensions"}),"schema extensions")," (in fact, you might not need extensions!). A stubbed type may always be expanded with additional service-specific fields (see the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#basic-example"}),"basic example"),"), however it requires a query in ",Object(i.b)("inlineCode",{parentName:"p"},"merge")," config as soon as it offers unique data."),Object(i.b)("p",null,"In terms of performance, stubbed types match the capabilities of schema extensions","\u2014","where one external delegation is required ",Object(i.b)("em",{parentName:"p"},"per field")," referencing a stub type. For example, requesting both ",Object(i.b)("inlineCode",{parentName:"p"},"buyer")," and ",Object(i.b)("inlineCode",{parentName:"p"},"seller")," fields from a Listing will require two separate delegations to the users service to fetch their respective field selections, even when batching. More advanced patterns like injected keys (discussed below) can outperform stubbing by resolving entire portions of a type with a single delegation per external service."),Object(i.b)("h3",{id:"injected-keys"},"Injected keys"),Object(i.b)("p",null,"Until now we've always been putting a ",Object(i.b)("inlineCode",{parentName:"p"},"User")," concept into the listings service. However, what if we reversed that and put a ",Object(i.b)("inlineCode",{parentName:"p"},"Listing")," concept into the users service? This pattern has the gateway fetch a set of key fields from one or more initial schemas (listings), then send them as input to the target schema (users), and recieve back a complete type."),Object(i.b)("p",null,"While this pattern is more sophisticated than stubbed types, it maximizes performance by effectively batching multiple fields of any type and selection","\u2014","all with a single delegation. Here's a complete example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const listings = [\n  { id: '1', description: 'Junk for sale', price: 10.99, sellerId: '1', buyerId: '2' },\n  { id: '2', description: 'Spare parts', price: 200.99, sellerId: '1', buyerId: null },\n];\n\nconst listingsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Listing {\n      id: ID!\n      description: String!\n      price: Float!\n      sellerId: ID!\n      buyerId: ID\n    }\n\n    type Query {\n      listingsByIds(ids: [ID!]!): [Listing]!\n    }\n  `,\n  resolvers: {\n    Query: {\n      listingsByIds: (root, args) => args.ids.map(id => listings.find(listing => listing.id === id)),\n    }\n  }\n});\n\nconst users = [\n  { id: '1', email: 'bigvader23@empire.me' },\n  { id: '2', email: 'hanshotfirst@solo.net' },\n];\n\nconst usersSchema = makeExecutableSchema({\n  typeDefs: `\n    type User {\n      id: ID!\n      email: String!\n    }\n\n    type Listing {\n      seller: User!\n      buyer: User\n    }\n\n    input ListingRepresentation {\n      sellerId: ID\n      buyerId: ID\n    }\n\n    type Query {\n      _listingsByReps(representations: [ListingRepresentation!]!): [Listing]!\n    }\n  `,\n  resolvers: {\n    Query: {\n      _listingsByReps: (obj, args) => args.representations,\n    },\n    Listing: {\n      seller(listing) {\n        return users.find(user => user.id === listing.sellerId);\n      },\n      buyer(listing) {\n        return users.find(user => user.id === listing.buyerId) || null;\n      }\n    }\n  }\n});\n")),Object(i.b)("p",null,"Some important features to notice in the above schema:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Listings service ",Object(i.b)("inlineCode",{parentName:"li"},"Listing")," now provides ",Object(i.b)("inlineCode",{parentName:"li"},"buyerId")," and ",Object(i.b)("inlineCode",{parentName:"li"},"sellerId")," keys rather than direct user associations."),Object(i.b)("li",{parentName:"ul"},"Users service ",Object(i.b)("inlineCode",{parentName:"li"},"Listing")," now ",Object(i.b)("em",{parentName:"li"},"only")," provides ",Object(i.b)("inlineCode",{parentName:"li"},"buyer")," and ",Object(i.b)("inlineCode",{parentName:"li"},"seller")," associations without any need for a shared ",Object(i.b)("inlineCode",{parentName:"li"},"id"),"."),Object(i.b)("li",{parentName:"ul"},"Users service defines a ",Object(i.b)("inlineCode",{parentName:"li"},"ListingRepresentation")," input for external keys, and a ",Object(i.b)("inlineCode",{parentName:"li"},"_listingsByReps")," query that recieves them.")),Object(i.b)("p",null,"To bring this all together, the gateway orchestrates collecting plain keys from the listing service, and then injecting them as representations of external records into the users service... from which they return as a complete type:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const gatewaySchema = stitchSchemas({\n  subschemas: [\n    {\n      schema: listingsSchema,\n      merge: {\n        Listing: {\n          selectionSet: '{ id }',\n          fieldName: 'listingsByIds',\n          key: ({ id }) => id,\n          argsFromKeys: (obj) => ({ id: obj.id }),\n        }\n      }\n    },\n    {\n      schema: usersSchema,\n      merge: {\n        Listing: {\n          selectionSet: '{ sellerId buyerId }',\n          fieldName: '_listingsByReps',\n          key: ({ sellerId, buyerId }) => ({ sellerId, buyerId }),\n          argsFromKeys: (representations) => ({ representations }),\n        }\n      }\n    },\n  ],\n  mergeTypes: true\n});\n")),Object(i.b)("p",null,"In summary, the gateway had selected ",Object(i.b)("inlineCode",{parentName:"p"},"buyerId")," and ",Object(i.b)("inlineCode",{parentName:"p"},"sellerId")," fields from the listings services, sent those keys as input over to the users service, and then recieved back a complete type resolved with multiple fields of any type and selection. Neat!"),Object(i.b)("p",null,"However, you may notice that both ",Object(i.b)("inlineCode",{parentName:"p"},"sellerId")," and ",Object(i.b)("inlineCode",{parentName:"p"},"buyerId")," keys are ",Object(i.b)("em",{parentName:"p"},"always")," requested from the listing service, even though they are only needed when resolving their respective associations. If we were sensitive to costs associated with keys, then we could judiciously select only the keys needed for the query with a field-level selectionSet mapping:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  schema: usersSchema,\n  merge: {\n    Listing: {\n      fields: {\n        seller: { selectionSet: '{ sellerId }' },\n        buyer: { selectionSet: '{ buyerId }' },\n      },\n      fieldName: '_listingsByReps',\n      key: ({ sellerId, buyerId }) => ({ sellerId, buyerId }),\n      argsFromKeys: (representations) => ({ representations }),\n    }\n  }\n}\n")),Object(i.b)("p",null,"One minor disadvantage of this pattern is that the listings service includes ugly ",Object(i.b)("inlineCode",{parentName:"p"},"sellerId")," and ",Object(i.b)("inlineCode",{parentName:"p"},"buyerId")," fields. There's no harm in marking these IDs as ",Object(i.b)("inlineCode",{parentName:"p"},"@deprecated"),", or they may be removed completely from the gateway schema using a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-combining-schemas#adding-transforms"}),"transform"),"."),Object(i.b)("h3",{id:"federation-services"},"Federation services"),Object(i.b)("p",null,"If you're familiar with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"}),"Apollo Federation"),", then you may notice that the above pattern of injected keys looks familiar... You're right, it's very similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"_entities")," service design of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"}),"Federation schema specification"),"."),Object(i.b)("p",null,"In fact, type merging can seamlessly interface with Federation services by sending appropraitely formatted representations to their ",Object(i.b)("inlineCode",{parentName:"p"},"_entities")," query:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  schema: usersSchema,\n  merge: {\n    Listing: {\n      selectionSet: '{ sellerId buyerId }',\n      fieldName: '_entities',\n      key: ({ sellerId, buyerId }) => ({ sellerId, buyerId, __typename: 'Listing' }),\n      argsFromKeys: (representations) => ({ representations }),\n    }\n  }\n}\n")),Object(i.b)("h2",{id:"combined-interfaces"},"Combined interfaces"),Object(i.b)("p",null,"Schema stitching offers multiple strategies for combining interfaces across subschemas; these techniques may be used individually or together."),Object(i.b)("h3",{id:"interface-merging"},"Interface merging"),Object(i.b)("p",null,"Type merging will automatically consolidate interfaces of the same name across subschemas, allowing each subschema to contribute fields:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const contentSchema = makeExecutableSchema({\n  typeDefs: `\n    interface HomepageSlot {\n      id: ID!\n      title: String!\n    }\n\n    type Post implements HomepageSlot {\n      id: ID!\n      title: String!\n    }\n  `\n});\n\nconst recommendationSchema = makeExecutableSchema({\n  typeDefs: `\n    interface HomepageSlot {\n      id: ID!\n      recommendedUrls: [URL!]!\n    }\n\n    type Post implements HomepageSlot {\n      id: ID!\n      recommendedUrls: [URL!]!\n    }\n  `\n});\n")),Object(i.b)("p",null,"These two ",Object(i.b)("inlineCode",{parentName:"p"},"HomepageSlot")," definitions will merge into a single gateway interface with combined fields:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"interface HomepageSlot {\n  id: ID!\n  title: String!\n  recommendedUrls: [URL!]!\n}\n")),Object(i.b)("h3",{id:"interface-extensions"},"Interface extensions"),Object(i.b)("p",null,"Merging alone may not be enough depending on how types are arranged across subschemas. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const postsSchema = makeExecutableSchema({\n  typeDefs: `\n    type Post {\n      id: ID!\n      title: String!\n      url: URL!\n    }\n  `\n});\n\nconst layoutsSchema = makeExecutableSchema({\n  typeDefs: `\n    interface HomepageSlot {\n      id: ID!\n    }\n\n    type Post implements HomepageSlot {\n      id: ID!\n    }\n\n    type Section implements HomepageSlot {\n      id: ID!\n      title: String!\n      url: URL!\n      posts: [Post!]!\n    }\n\n    type Homepage {\n      slots: [HomepageSlot]!\n    }\n  `\n});\n")),Object(i.b)("p",null,"In this case, Post and Section would ideally provide an interface of ",Object(i.b)("inlineCode",{parentName:"p"},"{ id title url }"),", however they only share an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," in the service that defines the interface. This constraint can be overcome with a gateway-level schema extension that adds ",Object(i.b)("inlineCode",{parentName:"p"},"{ title url }")," into the combined interface:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const gatewaySchema = stitchSchemas({\n  subschemas: [\n    { schema: postsSchema, merge: { ... } },\n    { schema: layoutsSchema, merge: { ... } },\n  ],\n  typeDefs: `\n    extend interface HomepageSlot {\n      title: String!\n      url: URL!\n    }\n  `,\n  mergeTypes: true\n});\n")),Object(i.b)("h2",{id:"custom-merge-resolvers"},"Custom merge resolvers"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"merge")," property of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stitch-combining-schemas#subschema-configs"}),"subschema config")," specifies how types are merged for a service, and provides a map of ",Object(i.b)("inlineCode",{parentName:"p"},"MergedTypeConfig")," objects:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export interface MergedTypeConfig {\n  selectionSet?: string;\n  resolve?: MergedTypeResolver;\n  fieldName?: string;\n  args?: (originalResult: any) => Record<string, any>;\n  key?: (originalResult: any) => K;\n  argsFromKeys?: (keys: ReadonlyArray<K>) => Record<string, any>;\n  valuesFromResults?: (results: any, keys: ReadonlyArray<K>) => Array<V>;\n}\n")),Object(i.b)("p",null,"All merged types across subschemas will delegate as necessary to other subschemas implementing the same type using the provided ",Object(i.b)("inlineCode",{parentName:"p"},"resolve")," function of type ",Object(i.b)("inlineCode",{parentName:"p"},"MergedTypeResolver"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type MergedTypeResolver = (\n  originalResult: any, // initial result from a previous subschema\n  context: Record<string, any>, // gateway context\n  info: GraphQLResolveInfo, // gateway info\n  subschema: GraphQLSchema | SubschemaConfig, // the additional implementing subschema from which to retrieve data\n  selectionSet: SelectionSetNode // the additional fields required from that subschema\n) => any;\n")),Object(i.b)("p",null,"The default ",Object(i.b)("inlineCode",{parentName:"p"},"resolve")," implementation that powers type merging out of the box looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mergedTypeConfig.resolve = (originalResult, context, info, schemaOrSubschemaConfig, selectionSet) =>\n  delegateToSchema({\n    schema: schemaOrSubschemaConfig,\n    operation: 'query',\n    fieldName: mergedTypeConfig.fieldName,\n    returnType: getNamedType(info.returnType),\n    args: mergedTypeConfig.args(originalResult),\n    selectionSet,\n    context,\n    info,\n    skipTypeMerging: true,\n  });\n")),Object(i.b)("p",null,"This resolver switches to a batched implementation in the presence of a ",Object(i.b)("inlineCode",{parentName:"p"},"mergedTypeConfig.key")," function. You may also provide your own custom implementation, however... note the extremely important ",Object(i.b)("inlineCode",{parentName:"p"},"skipTypeMerging")," setting. Without this option, your gateway will recursively merge types forever!"),Object(i.b)("p",null,"Type merging simply merges types of the same name, though it is smart enough to apply provided subschema transforms prior to merging. That means types have to be identical on the gateway, but not the individual subschema."),Object(i.b)("p",null,"Finally, you may wish to fine-tune which types are merged. Besides taking a boolean value, you can also specify an array of type names, or a function of type ",Object(i.b)("inlineCode",{parentName:"p"},"MergeTypeFilter")," that takes the potential types and decides dynamically how to merge."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type MergeTypeCandidate = {\n  type: GraphQLNamedType;\n  subschema?: GraphQLSchema | SubschemaConfig; // undefined if the type is added to the gateway directly, not from a subschema\n  transformedSubschema?: GraphQLSchema; // the target schema of the above after any subschema config schema transformations are applied\n};\n\nexport type MergeTypeFilter = (mergeTypeCandidates: Array<MergeTypeCandidate>, typeName: string) => boolean;\n")))}p.isMDXComponent=!0}}]);