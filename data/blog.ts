import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "b5",
    slug: "engineering-agentic-ai-assistants-nextjs-gemini",
    title: "Engineering Autonomous Agentic AI Assistants with Next.js 15 & Gemini 2.0",
    excerpt:
      "A deep technical dive into building Production-Ready Agentic AI workflows with streaming responses, function calling, tool execution, and context persistence in Next.js 15.",
    content: `Generative AI has shifted from simple prompt-response wrappers to autonomous Agentic AI workflows capable of function calling, tool execution, and stateful decision making.

## What Makes an AI Assistant "Agentic"?

Unlike static chatbots, an Agentic AI Assistant possesses:

- **Tool Access**: The ability to execute database lookups, booking actions, external API calls, and local UI state mutations.
- **Context Persistence**: Retaining multi-turn conversation memory across browser sessions and tab switches.
- **Guardrails & Content Auditing**: Real-time profanity filtering, rate limiting, and automated security lockouts.
- **Autonomous Planning**: Decomposing complex user goals into a sequence of discrete, observable actions instead of returning a single canned response.
- **Self-Correction**: Detecting failed tool calls and retrying with adjusted parameters before surfacing errors to the user.

> A genuinely agentic system does not just answer — it acts, verifies, and iterates until the user's goal is satisfied.

## Architecture Overview

In Next.js 15 (App Router), we build our AI endpoint using Server-Side Streaming Edge API Routes connected directly to Google Gemini 2.0 Flash models.

\`\`\`typescript
export async function POST(request: NextRequest) {
  const { messages } = await request.json();
  // Filter & sanitize multi-turn system prompts
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ system_instruction, contents: messages }),
    }
  );
  return response;
}
\`\`\`

The route handler stays thin because streaming, tool dispatch, and memory all live behind small, testable service modules.

## Streaming Responses with Gemini 2.0

Streaming is non-negotiable for perceived performance. Instead of buffering a full response, forward the model's token stream to the client:

- Use the **streamGenerateContent** endpoint and pipe the response body through.
- Emit progress events so the UI can render tokens as they arrive.
- Track a \`hasTyped\` flag per message so completed responses are never re-animated on re-render.

## Function Calling & Tool Execution

Agentic behavior depends on exposing real capabilities to the model. Define a typed tool registry:

\`\`\`typescript
const tools = {
  searchFlights: { description: "Search available flights", parameters: {} },
  bookAppointment: { description: "Book a calendar slot", parameters: {} },
  lookUpOrder: { description: "Fetch order status", parameters: {} },
};
\`\`\`

When the model emits a tool call, your route intercepts it, executes the real function, and returns the result back into the conversation as a tool response. This closes the agentic loop: the model observes real-world output and plans its next step from it.

## Context Persistence Across Sessions

Users switch tabs, close browsers, and come back days later. Persist conversation state per user:

- Store normalized message history in a low-latency store (Redis, Postgres, or IndexedDB).
- Scrub sensitive fields before writing to the transcript.
- Sliding-window truncation keeps token budgets predictable without losing the user's goal.

## Guardrails & Content Auditing

Production AI needs rails:

- **Profanity & toxicity filters** running on every inbound and outbound message.
- **Prompt-injection defenses** that strip hidden instructions before they reach the model.
- **Confidence thresholds** that force the assistant to ask for clarification instead of hallucinating.

## Rate Limiting & Security Lockouts

Protect your spend and your users:

- Per-user sliding window limits (e.g., 40 requests / 15 minutes).
- Exponential backoff after repeated violations.
- Automatic lockout with manual review triggers for suspicious activity patterns.

## Optimistic UI & Typewriter Rendering

- **Optimistic UI Updates**: Instantly append user input to local state while fetching AI responses to eliminate perceived latency.
- **Typewriter Rendering Efficiency**: Ensure completed messages are cached with \`hasTyped: true\` to avoid repetitive animation cycles upon component re-renders.

## Error Handling & Fallbacks

Every external dependency will fail eventually:

- Retry idempotent tool calls with exponential backoff.
- Fall back to a non-agentic, retrieval-only mode when the model endpoint degrades.
- Surface friendly, actionable errors instead of raw network failures.

## Observability & Cost Optimization

Treat the assistant like any production workload:

- Trace every turn: latency, tokens in/out, tool calls, and tool durations.
- Log aggregate spend per model, per user, and per feature.
- Cache identical tool results and reuse them across sessions when safe.

## Key Takeaways for Production

- Start with a narrow, well-defined tool surface; expand only as user flows prove out.
- Stream everything — buffering kills the UX.
- Persist context, audit content, and rate-limit aggressively.
- Measure token cost per resolved goal, not per turn.`,
    category: "AI Engineering",
    date: "2026-07-28",
    readTime: "10 min read",
    image: "/blog/aiblog.png",
    author: "Gianni Vilayhane",
    featured: true,
    views: "9.4k views",
    tags: ["AI Engineering", "Gemini 2.0", "Next.js 15", "TypeScript"],
  },
  {
    id: "b1",
    slug: "microservices-vs-monolith-2026",
    title: "Microservices vs Monolith in 2026: The Complete Architectural Framework",
    excerpt:
      "The monolith vs microservices debate isn't black and white. Here is a practical framework for deciding which architecture fits your software scale — with cost and SLA analysis.",
    content: `The debate between microservices and monolithic architecture has reached a mature consensus in 2026: earn your complexity, don't start with it.

## The 2026 Reality Check

Frameworks like Spring Boot, NestJS, and Next.js have made single-process applications dramatically more capable. At the same time, managed platforms (Kubernetes, serverless, Dapr) made distributed systems easier to run — but never easier to **reason about**. The cost curve of distribution has not moved; it has merely been deferred.

## What Is a Modular Monolith?

A modular monolith is a single deployable application with hard, language-enforced boundaries between business modules. Modules communicate through explicit interfaces — not through shared mutable state.

\`\`\`java
public interface OrderService {
  Order placeOrder(CreateOrderCommand command);
  OrderStatus statusOf(String orderId);
}
\`\`\`

Dependencies point inward; modules never reach into each other's internals. This keeps the operational simplicity of a monolith while preserving most of the architectural discipline of microservices.

## When to Choose a Modular Monolith

A monolithic architecture is still the right choice for:

- **Early-stage startups** where speed to market matters most.
- **Small engineering teams** (fewer than 10 developers) that cannot justify cross-service overhead.
- **Monolithic domains** with high transactional integrity, such as core ledger operations.
- **Teams without operational maturity** — no dedicated SRE, immature observability, or single-region deployments.

Modern modular monoliths — engineered with clear domain boundaries — power massive enterprise workloads at Shopify, Basecamp, and GitHub.

## When to Transition to Microservices

Microservices shine when:

- **Independent Deployments**: Different teams need unblocked deployment pipelines.
- **Asymmetric Scaling**: Specific modules (e.g., payment gateways or image processing) demand 100x more compute than read operations.
- **Technology Heterogeneity**: Services require specific languages (e.g., Java 21 Spring Boot for high throughput vs Python for ML workloads).
- **Fault Isolation**: A failure in one domain must not cascade into another.

## Cost Analysis

The decision is an economics problem as much as an engineering problem:

| Factor | Modular Monolith | Microservices |
| --- | --- | --- |
| Infrastructure cost | 1x | 3-8x across clusters, networking, observability |
| Deploy complexity | Single pipeline | Orchestrated, multi-pipeline |
| Onboarding time | Days | Weeks to months |
| Cross-service debugging | Rarely needed | Daily occurrence |
| Team autonomy | Limited | Full ownership |

> Distribution is a bet that the value of independent scaling and deployment exceeds the permanent tax on every developer interaction with the system.

## SLA & Reliability Considerations

- A monolith fails atomically: one deploy, one health state, one on-call runbook.
- Microservices fail **probabilistically**: any of 40 services can degrade, each with its own latency tail.
- True availability is the product of every dependency's availability. Twenty 99.9% services give you roughly 98% end-to-end.

Plan SLOs per critical path, not per service.

## Team Topology & Conway's Law

Systems mirror communication structures. If your organization is a single team, a single deployable is the honest architecture. Split services only when teams can take end-to-end ownership of a bounded domain — otherwise you inherit all the distributed cost with none of the autonomy benefit.

## Migration Strategy: The Strangler Fig

Never rewrite from scratch. Extract capabilities incrementally:

1. Identify the domain with the strongest scaling or ownership argument.
2. Carve it behind a stable internal interface inside the monolith first.
3. Extract it into a standalone service behind the same interface.
4. Route traffic gradually; keep a feature flag to flip back.
5. Delete the monolith's now-dead code path.

## Real-World Case Studies

- **Shopify**: Runs a modular monolith for core commerce while decomposing edge capabilities (search, checkout) into services.
- **Basecamp**: Operates a famously productive monolithic architecture with 30+ engineers serving millions of users.
- **GitHub**: Migrated incrementally from a Rails monolith to a service-oriented model over years — not months.

## Anti-Patterns to Avoid

- **Distributed monolith**: Services that cannot be deployed or reasoned about independently.
- **Synchronous dependency chains**: Five services in a request path negate every isolation benefit.
- **Shared database**: Two "services" writing to one schema are one system with extra hops.

## Decision Framework

Ask these questions in order:

1. Can one small team build and operate it? → Modular monolith.
2. Do independent deploys drive revenue? → Consider services per domain.
3. Does one module need 100x the compute of the rest? → Split that module only.
4. Can we survive 99.9% per-service availability math? → If not, stay monolith.

## Conclusion

Start modular, stay monolith as long as the numbers allow, and extract services surgically when a specific constraint — scaling, ownership, or isolation — forces the move. The winning architecture is the one your team can reason about at 3 AM.`,
    category: "Architecture",
    date: "2026-06-15",
    readTime: "12 min read",
    image: "/blog/microservices.png",
    author: "Gianni Vilayhane",
    featured: true,
    views: "4.8k views",
    tags: ["Architecture", "System Design", "Microservices", "Kafka"],
  },
  {
    id: "b2",
    slug: "spring-boot-performance-tuning",
    title: "Spring Boot Performance Tuning: From 200ms to 12ms High-Concurrency Throughput",
    excerpt:
      "A step-by-step guide to optimizing Spring Boot application performance — covering HikariCP connection pooling, Redis caching, JVM GC tuning, and Virtual Threads.",
    content: `Performance is a core product feature. Here is how we optimized a high-concurrency Spring Boot backend API from a 200ms latency p99 down to sub-12ms.

## The Starting Point: 200ms p99

The service handled 8,000 requests/second during peak, with a p99 latency of 200ms and a slow-tail spreading toward 600ms. The database was saturated, connection pools were exhausted, and the JVM was spending 8% of CPU on garbage collection.

## Profile Before You Optimize

The golden rule: never guess. We instrumented every request path with Micrometer and traced them through Grafana Tempo. Three culprits surfaced:

- N+1 ORM queries across the read-heavy endpoints.
- Unbounded connection-pool waits under concurrency.
- Default JVM GC settings tuned for throughput, not latency.

## 1. Database Query Optimization

The single largest win came from query optimization:

- Added composite indexes for high-frequency search vectors.
- Replaced N+1 ORM queries with explicit JOIN FETCH and \`@EntityGraph\`.
- Switched offset pagination to keyset (cursor-based) pagination.

\`\`\`java
@EntityGraph(attributePaths = {"lineItems", "customer"})
@Query("SELECT o FROM Order o WHERE o.status = :status")
List<Order> findOpenOrders(@Param("status") Status status);
\`\`\`

Keyset pagination eliminated the exponential slowdown of deep offsets:

\`\`\`sql
SELECT * FROM orders
WHERE (created_at, id) > (:cursor_ts, :cursor_id)
ORDER BY created_at, id
LIMIT 50;
\`\`\`

## 2. Distributed Redis Caching

We introduced Redis cluster caching for idempotent read workloads:

- Spring Cache annotations (\`@Cacheable\`) with automated TTL invalidation.
- Distributed lock synchronization to prevent cache stampedes.
- Read-through caching for hot lookup tables that change rarely.

| Cache | Hit rate | Latency saved |
| --- | --- | --- |
| Product catalog | 97% | ~18ms |
| Customer profile | 92% | ~14ms |
| Config snapshots | 99% | ~9ms |

## 3. HikariCP Connection Pool Sizing

Optimized HikariCP formulas:

\`\`\`text
MaximumPoolSize = (CPU cores * 2) + effective_spindle_count
\`\`\`

For a 4-core instance with fast SSD storage, that is **9-12 connections** — not 50. Oversized pools degrade under contention because waiting threads pile up behind row locks.

## 4. JVM Garbage Collection Tuning

We moved from the default Parallel GC to **G1 with latency-first flags**:

\`\`\`text
-XX:+UseG1GC
-XX:MaxGCPauseMillis=50
-XX:+UseStringDeduplication
-XX:G1NewSizePercent=5
\`\`\`

Pause time dropped from ~180ms to under 40ms, and heap churn from string-heavy payloads shrank with deduplication.

## 5. Virtual Threads & Concurrency

Java 21 virtual threads decouple the number of concurrent requests from OS threads. Blocking I/O now costs almost nothing, so the codebase reads naturally instead of being littered with reactive callbacks.

\`\`\`java
@GetMapping("/api/orders/{id}")
public Order getOrder(@PathVariable String id) {
  return orderService.findById(id); // blocking is cheap now
}
\`\`\`

## Observability & Benchmarking

- Micrometer + Prometheus + Grafana for live dashboards.
- Load-tested with k6 at 50, 100, and 200% of peak traffic.
- Every optimization was validated against a fixed synthetic workload before shipping.

## The Results

| Metric | Before | After |
| --- | --- | --- |
| p99 latency | 200ms | 12ms |
| p95 latency | 120ms | 7ms |
| DB connection count | 50 | 11 |
| GC pause time | 180ms | under 40ms |
| Throughput (req/s) | 8,000 | 26,000 |

## Key Takeaways

- Indexes, caching, and pool sizing account for 80% of the win; JVM tuning is the final 20%.
- Profile first, tune second, and measure every change against a baseline.
- Virtual threads make blocking code efficient without sacrificing readability.`,
    category: "Backend",
    date: "2026-05-20",
    readTime: "12 min read",
    image: "/blog/springbootblog.png",
    author: "Gianni Vilayhane",
    featured: false,
    views: "6.2k views",
    tags: ["Java 21", "Spring Boot", "HikariCP", "Redis"],
  },
  {
    id: "b3",
    slug: "docker-production-best-practices",
    title: "Docker & Kubernetes in Production: 10 Costly Mistakes & Zero-Downtime Fixes",
    excerpt:
      "From running containers as root to missing health checks, these are the most common DevOps mistakes in production — and how to fix each one with Dockerfile blueprints.",
    content: `Docker simplifies application packaging, but running containers securely in Kubernetes production requires strict discipline.

## Why Containers Fail in Production

Most production incidents from containers are not Docker bugs — they are decisions made at the Dockerfile and manifest layer. Here are the ten costliest mistakes and their zero-downtime fixes.

## 1. Never Run as Root

Always declare non-privileged application users inside your Dockerfile:

\`\`\`dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
\`\`\`

Root in a container is still root on the host kernel. Pair this with a read-only root filesystem and a non-root SecurityContext in Kubernetes.

## 2. Multi-Stage Build Optimization

Reduce production image sizes from 700MB down to 140MB using multi-stage builds:

\`\`\`dockerfile
FROM eclipse-temurin:21-jdk AS builder
COPY . /app
WORKDIR /app
RUN ./gradlew bootJar --no-daemon

FROM eclipse-temurin:21-jre-alpine
COPY --from=builder /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

Smaller images mean faster pulls, less attack surface, and quicker cold starts during scale events.

## 3. Always Pin Your Base Images

Never rely on mutable tags like \`latest\` or \`alpine\`. A rebuild can silently pull breaking or compromised packages.

\`\`\`dockerfile
FROM eclipse-temurin:21-jre-alpine@sha256:9b8a...
\`\`\`

- Pin by digest for reproducibility.
- Scan images with Trivy or Grype in CI.
- Enforce signatures with Cosign before deployment.

## 4. Define Health Checks

A container that fails to respond is still "Running." Kubernetes needs explicit signals:

- **Liveness probe**: restart the container when it deadlocks.
- **Readiness probe**: remove the pod from service endpoints while it warms up.
- **Startup probe**: give slow-booting workloads time before liveness kicks in.

\`\`\`yaml
readinessProbe:
  httpGet:
    path: /actuator/health
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
\`\`\`

## 5. Set Resource Requests & Limits

Without limits, one noisy neighbor can starve a node:

\`\`\`yaml
resources:
  requests:
    cpu: 250m
    memory: 512Mi
  limits:
    cpu: "1"
    memory: 1Gi
\`\`\`

- **Requests** reserve capacity and drive the scheduler.
- **Limits** stop runaway usage — but leave headroom for JVM and runtime overhead.

## 6. Configure Pod Disruption Budgets

A rolling cluster upgrade can kill every replica of a critical service at once. A PodDisruptionBudget guarantees minimum availability:

\`\`\`yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: orders-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: orders
\`\`\`

## 7. Use Proper Image Tagging

Tags like \`latest\` or \`v1\` create ambiguity during rollback. Encode the git SHA:

\`\`\`text
registry.example.com/orders:2f3a9c1b
\`\`\`

Immutable tags make "what is running in production" a question you can answer in seconds.

## 8. Never Store Secrets in the Image

Environment variables baked at build time are recoverable by anyone with image access. Use native secrets:

\`\`\`yaml
envFrom:
  - secretRef:
      name: app-secrets
\`\`\`

Rotate via managed secret stores (Vault, cloud KMS, or the cluster's native secrets) and never commit them to source control.

## 9. Zero-Downtime Deployments

Rolling updates are the baseline, but you need the right strategy to avoid blips:

1. Set \`maxUnavailable: 0\` and \`maxSurge: 1\` during deploy.
2. Wait for readiness before promoting the new version.
3. Use a canary with 5-10% traffic for risky changes.
4. Keep the previous image digest cached for instant rollback.

\`\`\`yaml
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxUnavailable: 0
    maxSurge: 1
\`\`\`

## 10. Observe Everything

- Export container metrics (CPU, memory, restarts, OOM kills) to Prometheus.
- Centralize logs with Loki or the cloud log store.
- Alert on crash-loop backoffs, OOMKills, and probe failures — not just on "pod down."

## The Professional Baseline

A production-ready deployment needs all ten, plus:

- **Pod Security Admission** to enforce non-root and read-only root filesystems.
- **Network policies** to limit east-west traffic.
- Quarterly review of every PodDisruptionBudget.

## Conclusion

Docker and Kubernetes do not make applications resilient by accident. The discipline lives in the files: non-root users, pinned digests, explicit probes, real limits, and immutable tags. Get these ten right and your cluster will survive what kills most others.`,
    category: "DevOps",
    date: "2026-04-10",
    readTime: "13 min read",
    image: "/blog/dockerblog.png",
    author: "Gianni Vilayhane",
    featured: false,
    views: "3.9k views",
    tags: ["Docker", "Kubernetes", "DevOps", "CI/CD"],
  },
  {
    id: "b4",
    slug: "nextjs-seo-complete-guide",
    title: "The Complete Next.js 15 & GEO/SEO Masterclass for 2026",
    excerpt:
      "Everything you need to rank #1 on Google and AI Engines (ChatGPT & Perplexity) — metadata API, JSON-LD structured schema, and Core Web Vitals optimization.",
    content: `Search engine optimization is no longer just about Google bots. In 2026, Generative Engine Optimization (GEO) ensures AI search tools like ChatGPT and Perplexity reference your digital platform.

## The New Search Landscape

Traditional search ranks pages. AI search **reads** pages, synthesizes answers, and attributes sources. Two realities define 2026:

- Google still dominates clicks, but AI assistants increasingly answer before the user ever visits a site.
- Structured, well-maintained content is now a first-class ranking input for both paradigms.

## 1. The Metadata API

Next.js provides a typed Metadata API for every route:

\`\`\`typescript
export const metadata: Metadata = {
  title: "Gianni Vilayhane — Freelance Full-Stack Developer",
  description: "Building production-grade web apps with Next.js & Spring Boot.",
  openGraph: { title: "...", description: "..." },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://example.com" },
};
\`\`\`

A unique, descriptive title and a 140-160 character description per page remain the cheapest SEO win available.

## 2. JSON-LD Structured Data

Provide machine-readable schema for products, software services, and professional profiles. Search engines and AI crawlers parse this deterministically.

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Complete Next.js SEO Masterclass",
  "author": { "@type": "Person", "name": "Gianni Vilayhane" },
  "datePublished": "2026-01-01"
}
\`\`\`

Validate every schema with the Rich Results Test — malformed JSON-LD is worse than none.

## 3. Server Components First

Next.js Server Components eliminate client-side rendering delay, presenting indexable HTML instantly:

- Content is in the initial HTML payload — no hydration required for crawling.
- Streaming enables progressive rendering of above-the-fold content.
- Avoid client-only data fetching for anything that should be indexed.

## 4. Core Web Vitals

Achieve 95+ PageSpeed scores through:

- Automated **webp/avif image compression** via \`next/image\`.
- \`next/font\` with self-hosted, preloaded fonts.
- Route-level code splitting with granular \`next/dynamic\` boundaries.
- Minimal third-party scripts loaded via \`next/script\` with the right strategy.

| Metric | Good target |
| --- | --- |
| LCP | Under 2.5s |
| INP | Under 200ms |
| CLS | Under 0.1 |

## 5. Sitemap & Robots

Expose your content map explicitly:

- Generate \`app/sitemap.ts\` dynamically from your content collections.
- Keep \`robots.txt\` simple: allow crawl, point at the sitemap.
- Add \`noindex\` only where genuinely appropriate — never by default.

## 6. GEO: Being Referenced by AI Engines

AI engines cite what they can reliably parse. To get referenced:

- Answer questions in the **first paragraph** — the model extracts answers, not promises.
- Use clean, semantic headings and short, quotable paragraphs.
- Add FAQ blocks with question-based headings.
- Keep factual claims specific and consistent across pages; contradictions erode trust signals.

## 7. E-E-A-T for AI

Experience, Expertise, Authoritativeness, and Trust are now machine-read:

- Maintain author pages with bios, credentials, and social links.
- Cite sources and link out to authoritative references.
- Keep publication dates accurate and update stale content.

## 8. Measure What Matters

- Track indexed pages in Google Search Console and Bing Webmaster Tools.
- Monitor AI-referral traffic separately from organic search.
- Watch **branded queries** in AI chats as a proxy for GEO success.

## Conclusion

Ranking in 2026 is a two-front war: fast, well-structured pages for crawlers, and clear, quotable content for AI engines. Next.js gives you both — if you treat metadata, schema, and Core Web Vitals as production requirements rather than afterthoughts.`,
    category: "Frontend",
    date: "2026-03-05",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    author: "Gianni Vilayhane",
    featured: false,
    views: "8.5k views",
    tags: ["Next.js 15", "React 19", "Technical SEO", "GEO"],
  },
  {
    id: "b6",
    slug: "kafka-realtime-event-streaming-architecture",
    title: "Apache Kafka Real-Time Event Streaming & Distributed Log Processing",
    excerpt:
      "How to architect fault-tolerant, high-throughput event streaming pipelines with Apache Kafka, Spring Cloud Stream, and schema registry validation.",
    content: `Asynchronous event streaming powers modern real-time architectures. Learn how to design robust Kafka producers, partition keys, consumer groups, and dead-letter topics.

## Event-Driven Fundamentals

An event is a fact that already happened: \`OrderPlaced\`, \`PaymentCaptured\`, \`InventoryAdjusted\`. Producers append facts to immutable logs; consumers read them at their own pace. This decouples writers from readers and makes replay possible.

## Kafka Architecture

Kafka organizes events into **topics**, split into **partitions** for parallelism and ordered by **offset**:

- A topic with 12 partitions allows up to 12 consumers in a group to read concurrently.
- Ordering is guaranteed **within a partition**, not across a topic.
- Partitions replicate across brokers (default replication factor 3) for fault tolerance.

## Partitioning Strategy

The partition key determines ordering and distribution:

\`\`\`java
// All events for one customer land in the same partition → ordered per customer
ProducerRecord<String, Order> record =
  new ProducerRecord<>("orders", order.customerId(), order);
\`\`\`

- Key by the **entity whose order you must preserve** (customer, order, device).
- Hash a high-cardinality key (e.g., customer ID) to distribute load evenly.
- Avoid a single hot key that skews one partition.

## Producer Configuration

\`\`\`text
acks=all
enable.idempotence=true
linger.ms=5
compression.type=lz4
\`\`\`

- \`acks=all\` with idempotence prevents data loss without duplicates.
- Linger + batching raises throughput dramatically at negligible latency cost.
- Monitor \`record-queue-time\` to detect broker-side backpressure.

## Consumer Groups

A consumer group lets you scale reading without losing ordering semantics:

\`\`\`java
@KafkaListener(topics = "orders", groupId = "order-processor")
public void onOrder(Order order) {
  // exactly-once processing via transactional outbox or idempotent handler
}
\`\`\`

- Each partition is consumed by exactly one member of the group.
- Rebalance happens when members join or leave — keep processing idempotent.
- Configure \`max.poll.interval.ms\` to avoid losing the lease during slow processing.

## Schema Registry

Schemas evolve, consumers don't. Use the Schema Registry with Avro or Protobuf:

- Producer registers the schema and stores it under a versioned ID.
- Consumers fetch the schema by ID and deserialize safely.
- Backward-compatible changes let older consumers keep reading new events.

## Dead Letter Topics

Not every event succeeds. A DLQ isolates poison messages:

1. Handler fails after N retries with backoff.
2. Event + original error header land on \`orders.dlt\`.
3. A repair job replays the DLQ after fixes.

This keeps the main consumer lagging-free while preserving evidence for investigation.

## Spring Cloud Stream Integration

Spring Cloud Stream abstracts binding details:

\`\`\`yaml
spring:
  cloud:
    stream:
      bindings:
        order-in-0:
          destination: orders
          group: order-processor
\`\`\`

The same code runs against a local broker or a managed Kafka cluster.

## Performance Tuning

- Batch size: start at 16KB and measure; batch your records in producers.
- Consumers: tune \`fetch.max.bytes\` and \`max.poll.records\` to match processing speed.
- Replication: 3 for production; keep min ISR at 2 to avoid losing committed data.
- Backpressure: let Kafka backpressure naturally via large \`max.poll.records\` with low poll frequency.

## Fault Tolerance

- **Replication**: data survives broker loss.
- **Acks=all + min.insync.replicas=2**: no committed data is lost.
- **Idempotent consumers**: replay-safe processing via deduplication keys.
- **Transactional outbox**: publish database changes and events atomically.

## Conclusion

Kafka rewards those who respect its primitives: partition keys, consumer groups, and schema discipline. Nail those and you get a stream that scales, replays, and survives failures — the backbone of modern real-time systems.`,
    category: "Database",
    date: "2026-02-18",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80",
    author: "Gianni Vilayhane",
    featured: false,
    views: "5.1k views",
    tags: ["Apache Kafka", "Event-Driven", "Streaming", "Java"],
  },
];

export const blogCategories = [
  "All",
  "AI Engineering",
  "Architecture",
  "Backend",
  "DevOps",
  "Frontend",
  "Database",
];
