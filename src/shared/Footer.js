import React from 'react'
import { List } from 'semantic-ui-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-wrapper flex">
        <List horizontal>
          <List.Item as='a' href="https://www.linkedin.com/in/amytangcodes/"><i className="linkedin icon"></i></List.Item>
          <List.Item as='a' href="https://github.com/amytangcodes/udemy-react-app"><i className="github icon"></i></List.Item>
          <List.Item as='a' href="mailto:hello@amytangcodes.com"><i className="envelope outline icon"></i></List.Item>
        </List>
        <p>&copy; {currentYear} Amy Tang Codes</p>
      </div>
    </footer>
  )
}

export default Footer;