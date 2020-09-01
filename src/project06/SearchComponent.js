import React, { useState, useEffect } from "react";
import { Form, List } from "semantic-ui-react";
import axios from "axios";

const SearchComponent = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    // if term is empty and you don't want to get wiki api error:
    if (term) {
      search();
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <List.Item key={result.pageid}>
        <List.Content>
          <List.Header
            as="a"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            {result.title}
          </List.Header>
          <List.Description>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </List.Description>
        </List.Content>
      </List.Item>
    );
  });

  return (
    <div className="section-block">
      <h2>Search Widget</h2>
      <Form.Input
        fluid
        label="Enter Search Term"
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <List divided relaxed>
        {renderedResults}
      </List>
    </div>
  );
};

export default SearchComponent;
