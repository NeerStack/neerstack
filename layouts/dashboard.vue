<template>
    <div class="dashboard">
        <sideBar/>
        <slot/>
    </div>
</template>
<style lang="scss" scoped>
    :root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}


.dashboard{
	background: var(--light);
  max-width: 100%;
}

.dashboard button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.dashboard {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1024px) {
			padding-left: 4rem;
		}
	}
}
</style>
