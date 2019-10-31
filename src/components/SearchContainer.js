// import React, { useState, useEffect } from "react"
// import Axios from "axios"
// import { graphql, StaticQuery, useStaticQuery } from "gatsby";
// import * as JsSearch from "js-search"
// const Search = (props) => {

//   const [bookList, setBookList] = useState([])
//   const [search, setSearch] = useState([])
//   const [searchResults, setSearchResults] = useState([])
//   const [isLoading, setLoading] = useState(true)
//   const [isError, setError] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")
//   const data = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark(
//           sort: {order: DESC, fields: [frontmatter___date] }

//         ) {
//         edges {
//           node {
//             frontmatter {
//               title
//               date(formatString: "DD/MM/YYYY")
//               tags
//               categories
//             }
//             excerpt 
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//     `)
//   const theGreatGatsby = [{
//     isbn: '9781597226769',
//     title: 'Hanh trinh tro thanh ',
//     author: {
//       name: 'F. Scott Fitzgerald'
//     },
//     tags: ['book', 'inspirational']
//   }, {
//     isbn: '0307474275',
//     title: 'Hanh trinh tro thanh 12 ',
//     author: {
//       name: 'Dần Brown'
//     },
//     tags: ['book', 'mystery']
//   }, {
//     isbn: '074349346X',
//     title: 'Hanh trinh tro thanh 21',
//     author: {
//       name: 'Dan Brown',
//     },
//     tags: ['book', 'mystery']
//   }];
//   useEffect(() => {
//     setBookList(data.allMarkdownRemark.edges.map((item) => item.node.frontmatter))
//     rebuildIndex()
//   }, [])

//   const rebuildIndex = () => {
//     const dataToSearch = new JsSearch.Search("isbn")
//     dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
//     dataToSearch.addIndex("title") // sets the index attribute for the data    
//     dataToSearch.addDocuments(theGreatGatsby) // adds the data to be searched
//     setSearch(dataToSearch)
//     setLoading(false)
//   }
//   const searchData = e => {
//     const queryResult = search.search(e.target.value)
//     setSearchQuery(e.target.value)
//     setSearchResults(queryResult)
//   }
//   const handleSubmit = e => {
//     e.preventDefault()
//   }
//   const queryResults = searchQuery === "" ? theGreatGatsby : searchResults

//   return (
//     <div>
//       <div style={{ margin: "0 auto" }}>
//         <form onSubmit={handleSubmit}>
//           <div style={{ margin: "0 auto" }}>
//             <label htmlFor="Search" style={{ paddingRight: "10px" }}>
//               Enter your search here
//               </label>
//             <input
//               id="Search"
//               value={searchQuery}
//               onChange={searchData}
//               placeholder="Enter your search here"
//               style={{ margin: "0 auto", width: "400px" }}
//             />
//           </div>
//         </form>
//         <div>
//           Number of items:
//             {queryResults.length}

//         </div>
//       </div>
//     </div>

//   )
// }

// export default Search

