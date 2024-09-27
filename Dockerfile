FROM node:22.4.1 AS build

WORKDIR /usr/src/app

COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY apps/server/package.json ./apps/server/
COPY turbo.json ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

WORKDIR /usr/src/app/apps/server

RUN pnpm run build

FROM node:22.4.1-alpine AS production

WORKDIR /usr/src/app

COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY apps/server/package.json ./apps/server/

RUN npm install -g pnpm
RUN pnpm install --prod --frozen-lockfile

COPY --from=build /usr/src/app/apps/server/dist ./apps/server/dist

EXPOSE 3000

CMD ["node", "apps/server/dist/main.js"]
