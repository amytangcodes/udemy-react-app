import React from 'react'
import { List } from 'semantic-ui-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <List bulleted horizontal>
        <List.Item as='a'>&copy; {currentYear} Amy Tang Codes</List.Item>
        <List.Item as='a' href="https://www.linkedin.com/in/amytangcodes/">About</List.Item>
        <List.Item as='a' href="mailto:hello@amytangcodes.com">Email</List.Item>
      </List>
    </footer>
  )
}

export default Footer;