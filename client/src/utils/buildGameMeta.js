export function buildGameMeta(originalGame = null, overrides = {}) {
    return {
        likes: originalGame?.likes ?? 0,
        comments: originalGame?.comments ?? [],
        isVerified: originalGame?.isVerified ?? false,
        _ownerId: overrides._ownerId ?? originalGame?._ownerId,
        _createdOn: overrides._createdOn ?? originalGame?._createdOn ?? Date.now(),
        ...overrides,
    };
}