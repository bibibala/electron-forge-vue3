import { defineStore } from 'pinia';

export const usePublic = defineStore('public', {
  state: () => ({
    ACTIVE_INDEX: 6,
  }),
});
