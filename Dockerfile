FROM nginx:1.27-alpine

# Remove a config padrão e usa a nossa
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/site.conf

# Arquivos do site
COPY site/ /usr/share/nginx/html/

# Pasta das propostas (em produção é substituída pelo volume compartilhado com o n8n)
RUN mkdir -p /usr/share/nginx/html/p

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1
