'use client'

import { TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'

type Props = TypographyProps & {
  bold?: boolean
  component?: string
}

const Text: React.FC<Props> = ({ children, bold = false, sx, ...props }) => (
  <Typography {...props} sx={[bold ? { fontWeight: 600 } : {}, ...(Array.isArray(sx) ? sx : [sx])]}>
    {children}
  </Typography>
)

export default Text
