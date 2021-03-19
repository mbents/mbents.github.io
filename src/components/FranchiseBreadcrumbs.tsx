import { Breadcrumbs, makeStyles, Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyles = makeStyles(() => ({
  breadcrumbMargin: {
    marginBottom: '10px'
  }
}))

interface IFranchiseBreadcrumbs {
  franchiseId?: string
}

export default function FranchiseBreadcrumbs(props: IFranchiseBreadcrumbs) {
  const { franchiseId } = props
  const classes = useStyles()
  return (
    <Breadcrumbs className={classes.breadcrumbMargin} separator={<NavigateNextIcon fontSize="small" />}>
      <Link color="inherit" href="/">
        Home
      </Link>
      {franchiseId ?
      <Link color="inherit" href="/#/franchises">
        Franchises
      </Link> :
      <Typography color="textPrimary">Franchises</Typography>}
      {franchiseId &&
      <Typography color="textPrimary">{franchiseId}</Typography>}
    </Breadcrumbs>
  )
}
