import { createStyles, Link, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    sectionHeader: {
      fontFamily: '"Courier New",Courier,monospace',
      fontWeight: 'bold'
    },
    sectionBreak: {
      marginBottom: '20px'
    },
    paper: {
      padding: '20px',
      margin: '20px 20px',
      backgroundColor: '#e8e8e8'
    },
    container: {
      width: '65%'
    },
    code: {
      backgroundColor: '#e8e8e8',
      borderRadius: '5px',
      padding: '5px'
    },
    dateStamp: {
      flex: 1
    }
  })
)

const About: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography align="right" className={classes.dateStamp}>February 24, 2021</Typography>
      <Typography variant="h5" className={classes.sectionHeader}>What's all this then</Typography>
      <Typography variant="body1" className={classes.sectionBreak}>
        For quite a while I've been wanting to build a web application that makes use of baseball data.
        I had what seemed like a pretty simple goal for it: I wanted it to be something that I would use 
        to look up baseball data or statistics or the boxscore from a certain game. But I could never quite 
        get a fully functional application running. I would start out pretty well by scraping or 
        downloading/parsing/cleaning data from somewhere and then run out of steam when it came time to 
        figure out how to host the data, let alone come up with a way to show and interact with it. Now 
        don't get me wrong, I don't think that what I describe below is the fully-functional baseball 
        application of my dreams. But what I've put together is a good step in that direction. 
        I think it's a solid foundation and it's something that I hope to continue to work on.
      </Typography>
      <Typography variant="h5" className={classes.sectionHeader}>Let's get started</Typography>
      <Typography variant="body1" className={classes.sectionBreak}>
        The entire system&mdash;if you will&mdash;is currently made up of two different GitHub repositories:
        <Paper elevation={3} className={classes.paper}>
          <Link href='https://github.com/mbents/mbents.github.io'>
            https://github.com/mbents/mbents.github.io
          </Link>
          <br />
          <Link href='https://github.com/mbents/rs-data'>
            https://github.com/mbents/rs-data
          </Link>
        </Paper>
        The web application was created using Create React App 
        (<Link href='https://github.com/facebook/create-react-app'>
          https://github.com/facebook/create-react-app
        </Link>) and is hosted on GitHub using GitHub Pages. I found a lot of different tutorials for doing this. 
        Here are the ones that I found most useful:
        <Paper elevation={3} className={classes.paper}>
          <Link href='https://create-react-app.dev/docs/deployment/#github-pages'>
            https://create-react-app.dev/docs/deployment/#github-pages
          </Link>
          <br/>
          <Link href='https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f'>
            https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
          </Link>
        </Paper>
        <span className={classes.code}>gh-pages</span> is a package that helps publish your website. 
        There's a handy deploy step that packages up your site's files and pushes them to a branch on GitHub. 
        My web application also uses <span className={classes.code}>mobx-state-tree</span> for state management 
        and <span className={classes.code}>Material-UI</span> to build the UI.
      </Typography>
      <Typography variant="body1" className={classes.sectionBreak}>
        The backend data is also hosted via GitHub Pages. Basically it's a static API that only serves data 
        to <span className={classes.code}>GET</span> requests, but that's really all I needed and it's easy to do. 
        I originally got the idea from this post:
        <Paper elevation={3} className={classes.paper}>
          <Link href='https://dev.to/matmooredev/can-you-host-a-read-only-api-on-github-pages-1jib'>
            https://dev.to/matmooredev/can-you-host-a-read-only-api-on-github-pages-1jib
          </Link>
        </Paper>
        The repository itself is a collection of historical baseball data that I downloaded from a website 
        called Retrosheet (<Link href='https://www.retrosheet.org/'>https://www.retrosheet.org/</Link>). 
        I parsed the event files using a couple utilities that I had created several years ago:
        <Paper elevation={3} className={classes.paper}>
          <Link href='https://github.com/mbents/retrosheet-download-dotnet'>
            https://github.com/mbents/retrosheet-download-dotnet
          </Link><br />
          <Link href='https://github.com/mbents/csv-to-json'>
            https://github.com/mbents/csv-to-json
          </Link>
        </Paper>
        They both still worked, which was pretty cool! The first project was written in C# and uses an executable 
        found on the Retrosheet website called <span className={classes.code}>BGAME</span> to parse the files 
        into CSV files. The second utility is a Node.js application that converts the CSV files to JSON. After everything
        was parsed and I pushed the changes, I had a basic API up and running.
      </Typography>
      <Typography variant="h5" className={classes.sectionHeader}>Gotcha!</Typography>
      <Typography variant="body1" className={classes.sectionBreak}>
        A nice thing, in my opinion, about doing it this way is I can access the data just using the URL to the directory. 
        For example, this will return JSON data:
        <Paper elevation={3} className={classes.paper}>
          <Link href='https://mbents.github.io/rs-data/ballparks/'>
            https://mbents.github.io/rs-data/ballparks/
          </Link>
        </Paper>
        I don't need to specify <span className={classes.code}>index.json</span> in the 
        URL&mdash;which is the file located in the <span className={classes.code}>/ballparks</span> directory&mdash;but 
        it's important that it's there. 
        Because I'm fetching the directory and the directory contains a file named <span className={classes.code}>index.json</span>, the data returned will be the 
        contents of that file. This is a nice (possibly undocumented?) feature of GitHub, apparently.
      </Typography>
      <Typography variant="body1" className={classes.sectionBreak}>
        There are a couple things to take note of from this guide:
        <Paper elevation={3} className={classes.paper}>
          <Link href='https://create-react-app.dev/docs/deployment/#github-pages'>
            https://create-react-app.dev/docs/deployment/#github-pages
          </Link>
        </Paper>
        If you want to point a domain to your GitHub Pages project, you'll have to add a <span className={classes.code}>CNAME</span> file 
        to your repository, as noted in Step 5.<br />
        Also, if your React application uses client-side routing, you might need to make some changes. My app 
        uses <span className={classes.code}>React Router</span> and I switched from the 
        common <span className={classes.code}>Router</span> to use <span className={classes.code}>HashRouter</span>.<br />
        One more thing: I strongly recommend NOT tweaking the <span className={classes.code}>package.json</span> scripts 
        to push deployments to your main branch. In hindsight, it seems pretty obvious. However, at the time, I 
        didn't consider that all my React code was going to be overwritten by 
        the <span className={classes.code}>gh-pages</span> deployment process. 
      </Typography>
      <Typography variant="h5" className={classes.sectionHeader}>Conclusion</Typography>
      <Typography variant="body1" className={classes.sectionBreak}>
        I certainly didn't intend for this to be a step-by-step guide for creating a React application 
        using a GitHub Pages repository as an API, but here we are. I mainly put this together because 
        I know that, given the way I start and stop my personal projects, at some point I will need 
        to reference this material again. If you're here and you aren't me, then I hope that this was 
        useful to you!
      </Typography>
    </div>
  )
}

export default About
