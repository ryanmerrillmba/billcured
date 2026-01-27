import { Link } from 'react-router-dom'
import { BreadcrumbSchema } from './StructuredData'
import './Breadcrumbs.css'

const SITE_URL = 'https://www.billcured.com'

function Breadcrumbs({ items }) {
  // Build full URLs for schema
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.path ? `${SITE_URL}${item.path}` : SITE_URL,
  }))

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={item.path || index} className="breadcrumbs-item">
                {isLast ? (
                  <span className="breadcrumbs-current" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link to={item.path} className="breadcrumbs-link">
                      {item.name}
                    </Link>
                    <span className="breadcrumbs-separator" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs
