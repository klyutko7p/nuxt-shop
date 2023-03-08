<template>
    <div>
        <button
            class="inline-flex items-center px-5 py-3 border border-black rounded-2xl font-semibold text-xs text-black uppercase tracking-widest hover:bg-[var(--hover-color)] active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:bg-[var(--hover-color)] focus:ring-gray-300 disabled:opacity-25 transition hover:border-transparent">
            <slot></slot>
        </button>
    </div>
</template>
