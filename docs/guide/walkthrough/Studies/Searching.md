Neurosynth-Compose works with the neurostore database to provide a convenient and functional interface to search for studies.

### Search Mechanics

Searching for semantically relevant results utilizes PostgreSQL's support of tokens/vectors when searching documents for relevant text. This approach excludes commonly used words like "a", "it", "on", and "the". It also aims to return similar words and word forms during the search (the term "brain" should return "brains" for example). For a more in depth understanding, you can take a look at the [docs for text search](https://www.postgresql.org/docs/current/textsearch-controls.html).

Searches are conducted across title and abstract fields. 
The input supports `AND`, `OR`, and `NOT` operations. 

For example to use the `AND` operator, you can enter in a value like `nicotine and memory`. Similarly, you can enter an input like `smoking or nicotine` for the `OR` operator, and `smoking -marijuana` for the `NOT` operator (where marijuana is the excluded term).

In order to ensure that text is grouped together (i.e. one word follows the other) you can include the words in parentheses. For example, the search `"anterior insula"` will only yield results where the word "anterior" is followed by the word "insula". You can then use the above search operators on grouped words: `smokers -"anterior insula"`

### Study Data Type

Studies can either report their findings as coordinate data, image data, or in some cases, both. Using the Study Data Type button, you 
can filter the results so that only coordinate or image data appears. For example, if you are doing a coordinate based meta-analysis, you 
will want to filter the results to show only studies that report coordinates.

### Sorting Results

Use the Sort By feature to sort the results based on a given property. You can also set this to be ascending or descending.

### Filtering

To filter the results of the search, click on the orange <span style={{ fontWeight: 'bold', color: 'orange' }}>Add Filter</span> button. You have the option of filtering by title, description, author, or publication. Enter the string you want to filter by and click add to apply the filter.

Only one filter can be applied for each field. In order to remove a filter, simply click on the delete button on the given filter.