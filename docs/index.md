---
layout: home

title: Zero Network
description: Docs and developer portal for Zero Network
---

<script setup>
import { useRouter } from 'vitepress'

const router = useRouter()

if (typeof window !== 'undefined') {
  router.go('/zero-docs/overview/intro')
}
</script>
