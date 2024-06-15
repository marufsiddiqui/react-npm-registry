import { PackageSummary } from '../types/packageSummary'

interface SearchResult {
  objects: {
    package: {
      name: string
      description: string
      version: string
      keywords: string[]
    }
  }[]
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
  const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=${term}`)
  const data: SearchResult = await res.json()
  return data.objects.map((res) => ({
    name: res.package.name,
    description: res.package.description,
    version: res.package.version,
    keywords: res.package.keywords,
  }))
}
