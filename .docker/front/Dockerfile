FROM node:21.6.2-bullseye-slim AS dev

WORKDIR /app

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get autoremove -y && \
  rm -rf /var/lib/apt/lists

COPY ./src /app

FROM node:21.6.2-bullseye-slim AS base

FROM base AS builder

WORKDIR /app
RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get autoremove -y && \
  rm -rf /var/lib/apt/lists

COPY ./src .
RUN yarn --frozen-lockfile && \
  yarn build

FROM builder AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN groupadd -r nodejs &&  \
  useradd -r -u 1001 -g nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]
