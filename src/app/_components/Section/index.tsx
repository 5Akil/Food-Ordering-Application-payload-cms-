import React from 'react'

import classes from './index.module.scss'

export const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className={classes.hero}>{children}</section>
}
