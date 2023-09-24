export default interface UseCase<I, O> {
    executar(input: I): Promise<O>
}