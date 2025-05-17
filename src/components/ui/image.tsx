import * as React from "react"
import { cn } from "@/lib/utils"

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, alt, fallback = "/placeholder.svg", ...props }, ref) => {
    const [src, setSrc] = React.useState(props.src)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
      setSrc(props.src)
      setError(false)
    }, [props.src])

    return (
      <img
        ref={ref}
        {...props}
        alt={alt}
        src={error ? fallback : src}
        onError={() => {
          setError(true)
        }}
        className={cn(
          "object-cover transition-all duration-300",
          error && "blur-sm",
          className
        )}
      />
    )
  }
)
Image.displayName = "Image"

export { Image }