import React, { useState, useEffect, Fragment } from "react";
import { Form, List } from "semantic-ui-react";
import SectionHeader from "../../shared/SectionHeader";
import axios from "axios";

const SearchComponent = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };

    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

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
    <Fragment>
      <SectionHeader pageHeading="Search Widget" />

      <div className="ui form">
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
    </Fragment>
  );
};

export default SearchComponent;
