# Architecture

Current deployable layer is a Vercel-ready Next.js app with mock APIs.

Future production architecture:
- apps/web: Next.js PWA
- apps/admin: Next.js Admin OS
- services/booking: NestJS
- services/hotel-content: NestJS
- services/provider-gateway: Go/NestJS
- services/crm-growth: FastAPI
- services/ai-ranking: FastAPI
- services/analytics: ClickHouse worker
- infra: Docker, Kubernetes, GitHub Actions, Cloudflare, Nginx

Datastores:
- PostgreSQL for transactional OTA
- Redis for cache/queue
- ElasticSearch/OpenSearch for semantic + typo tolerant search
- ClickHouse for BI and behavioral analytics
