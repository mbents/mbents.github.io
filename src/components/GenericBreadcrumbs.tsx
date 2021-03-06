import { Breadcrumbs, makeStyles, Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyles = makeStyles(() => ({
  breadcrumbMargin: {
    marginBottom: '10px'
  }
}))

interface IGenericBreadcrumbs {
  breadcrumb: string
}

export default function GenericBreadcrumbs(props: IGenericBreadcrumbs) {
  const { breadcrumb } = props
  const classes = useStyles()
  return (
    <Breadcrumbs className={classes.breadcrumbMargin} separator={<NavigateNextIcon fontSize="small" />}>
      <Link color="inherit" href="/">
        Home
      </Link>
      <Typography color="textPrimary">{breadcrumb}</Typography>
    </Breadcrumbs>
  )
}
